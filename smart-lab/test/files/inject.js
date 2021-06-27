/* Initialisation
 ----------------------------------------------- */
if (typeof MediaMetricsInjectClass == "undefined"){
    
MediaMetricsInjectClass = {
    title:     'News and Media rating',
    dir:       '//mediametrics.ru/partner/inject/',
    tabooPath: '//mediametrics.ru/partner/data',
    href:      '//mediametrics.ru',
    version: '1.8.3',
    params: {
        site:        'mmet/mynews',
        width:       800,
        height:      200,
        bgcolor:     'FFF',
        bordercolor: '000',
        linkscolor:  '232323',
        transparent: false,
        alignment:   'vertical',
        rows:        5,
        inline:      true,
        font:        'big',
        fontfamily:  'roboto',
        logo:        false,
        border:      false,
        borderwidth: 1,
        period:      'hour',
        sitegroup:   '',
        depth_coeff: 3,
        country:     'ru',
        adaptive:    false,
        responsive:  false,
        img:         'false',
        imgsize:    '70',
        type:       'img', //std, img, img-big, text-over-image, carousel [not implemented], img-rect
        css:        false
    },
    $el: [],
    variousParams: [],
    rawdata: [],
    advdata: []
};

var site_groups ={
    business: [
        'vedomosti.ru',
        'kommersant.ru',
        'top.rbc.ru',
        'vestifinance.ru'
    ]
}

MediaMetricsInjectClass.init = function() {
    var isLoaded = false;
    var styles = document.getElementsByTagName('link');
    for (item1=0; item1<styles.length; item1++) {
        if (typeof(styles[item1]) == 'object' && styles[item1].id == 'mediametrics') {
          isLoaded = true;
        }
    }

    var elements = document.getElementsByTagName('script');
    if (elements.length > 0) {
        for (item1=0; item1<elements.length; item1++) {
            //hasAttribute в IE не работает

         if (
                typeof(elements[item1]) == 'object'
                && (elements[item1].src.indexOf('mediametrics') < 20 )
                && (elements[item1].src.indexOf('mediametrics') > -1 )
                && (elements[item1].src.indexOf('online.js') == -1)
                && (elements[item1].src.indexOf('inject.js') > -1)
                && (
                    (   elements[item1].attributes['data-isload']!=undefined
                        && elements[item1].getAttribute('data-isload')=='false'
                    )
                    || elements[item1].attributes['data-isload']==undefined
                    )
                && (elements[item1].attributes['data-mmnoparse']==undefined)
             ) {
           this.systemRequireAttributes(elements[item1]);
           this.$el.push(elements[item1]);
           if (window['MediaMetricsICounter'] == undefined){
               var itemno = 0;
           }else{
               var itemno = window['MediaMetricsICounter'] + 1;
           }
           window['MediaMetricsICounter'] = itemno;
           elements[item1].setAttribute('data-isload', 'true');
           elements[item1].setAttribute('data-itemno', itemno);

         }
        }
    }

    if (!isLoaded){
        this.systemRequireCss();
    }


    if (this.variousParams[0].img){
        this.systemRequireJs('//mediametrics.ru/partner/inject/'+ this.variousParams[0].period +'.' + this.variousParams[0].country.replace('/', '.') + '.js', 'News');
    }else{
        this.systemRequireJs('//mediametrics.ru/rating/'+ this.variousParams[0].country +'/'+ this.variousParams[0].period +'.js' + "?search=" + this.variousParams[0].sitegroup + "&per_page=" + (this.variousParams[0].depth_coeff*this.variousParams[0].rows+10) + ";geo=auto", 'News');
    }
    this.widgetLoad();

};


/* Widget
 ----------------------------------------------- */

MediaMetricsInjectClass.widgetLoad = function() {
    var that = this;
    this.systemMethodAfterDefinition('MediaMetricsRating', function(){
        that.rawdata = MediaMetricsRating;
        that.prepare();
        window['MediaMetricsRating'] = undefined;
    });
};

MediaMetricsInjectClass.prepare = function(){
    this.data = [];
    var that = this;
    for (i=0; i<this.variousParams.length; i++){
      this.data[i] = this.rawdata;
    }
    this.dataModeration(function(){
      that.dataCut();
      that.widgetInsert();
      that.widgetStyle();

      if (window['MediaMetricsRating'] != undefined){
        //window['MediaMetricsRating'] = undefined;
      }
    });
    if (this.variousParams.length > 0){
        for (var i in this.variousParams){
            if (this.variousParams[i].css){
                this.systemRequireCustomCss(this.variousParams[i].css);
            }
        }
    }

};

MediaMetricsInjectClass.widgetInsert = function() {
    if (this.data.length > 0) {
      for (i=0; i<this.$el.length; i++){
        if ( this.$el[i].attributes['data-isproceed']==undefined){
					if (this.$el[i].parentNode != null){
						this.$wrapper = document.createElement('div');
                        if (window.location.href == 'https://echo.msk.ru/') {
                            this.$wrapper.setAttribute('id', 'DivID');
                            this.$wrapper.style.width = '240px';
                            this.$wrapper.style.height = '400px';
                            this.$wrapper.style.overflow = 'hidden';
                            this.$wrapper.style.overflowY = 'auto';
                            this.$wrapper.style.fontFamily = 'roboto';
                            

                             var my_awesome_script = document.createElement('script');
                             my_awesome_script.src = '//news.mediametrics.ru/cgi-bin/b.fcgi?ac=b&m=js&v=3&height=500&id=DivID&width=240&font-size=13px&line-height=1.39&font-family=unset&font-style=normal&font-weight=normal&color=232323&n=7';
                             this.$wrapper.appendChild(my_awesome_script);
                        }
                        else {
                            this.$wrapper.innerHTML = this.widgetTemplate(i);
                        }
						this.$el[i].parentNode.insertBefore(this.$wrapper, this.$el[i].nextSibling);
						this.$el[i].setAttribute('data-isproceed', 'true');
						this.counterEvent();
					}else{
						this.variousParams[i].deleted = true;
					}
        }
      }
    }
};

MediaMetricsInjectClass.widgetStyle = function() {
    this.$block = document.getElementsByClassName('mm-body');
		var offset = 0;
    for (i=0; i<this.$block.length+offset; i++){
			if (typeof(this.variousParams[i]) != 'undefined' && typeof(this.variousParams[i].deleted) != 'undefined' && this.variousParams[i].deleted){
				offset++;
				continue;
			}
			var blockIndex = i - offset;
        if (this.variousParams[i]==undefined){
            this.variousParams[i]=this.variousParams[0];
        }
      if (typeof(this.$block[blockIndex])=='object'){
          // Set background color
          this.$block[blockIndex].style.background = this.variousParams[i].transparent == 'true' ? 'transparent' : '#' + this.variousParams[i].bgcolor;
          // Set widget size depends from border width (if defined).
        if (this.variousParams[i].border == 'true' && this.variousParams[i].borderwidth > 0) {
          // Border
          this.$block[blockIndex].style.borderWidth = this.variousParams[i].borderwidth + 'px';
          this.$block[blockIndex].style.borderColor = '#' + this.variousParams[i].bordercolor;
          this.$block[blockIndex].style.padding = '10px';
          // Block
          if (this.variousParams[i].adaptive==false){
            this.$block[blockIndex].style.width = this.variousParams[i].width - (this.variousParams[i].borderwidth*2 + 20) + 'px';
            this.$block[blockIndex].style.height = this.variousParams[i].height - (this.variousParams[i].borderwidth*2 + 20) + 'px';
          }
        } else {
            if (this.variousParams[i].adaptive==false){
                this.$block[blockIndex].style.width = this.variousParams[i].width + 'px';
                this.$block[blockIndex].style.height = this.variousParams[i].height + 'px';
            }
        }
      }
    }
};


MediaMetricsInjectClass.widgetTemplate = function(i) {
    //return "<div class='mm-body mm-body__fontsize--"+this.params.font+" mm-body__fontface--"+this.params.fontfamily+" mm-body__border--"+this.params.border+"' id='mm-body'><div class='mm-body__inner'><a class='mm-logo "+this.params.logoClass+"' title='"+this.title+"' href='"+this.href+"' target='_blank'>"+this.title+"</a><div>"+ this.widgetRows() +"</div></div></div>";
    var classes = '';
    var style;
    if (this.variousParams[i].adaptive=='true'){
        style = 'width: auto; height: auto;';
    }else{
        if (this.variousParams[i].img=='true' && this.variousParams[i].adaptive!='false'){
            if (this.variousParams[i].responsive=='true'){
                classes += 'mm-body-responsive';
                style =  'height: '+this.variousParams[i].width+'px;"';
            }else{
                style = 'width: '+this.variousParams[i].width+'px; height: '+this.variousParams[i].width+'px;"';
            }
        }
    }
    return "<div class='mm-body mm-body__fontsize--"+this.variousParams[i].font+" mm-body__fontface--"+this.variousParams[i].fontfamily+" mm-body__border--"+this.variousParams[i].border+" "+classes+" "+(this.variousParams[i].img=='true'?'mm-body_imaged':'')+"' id='mm-body' style='"+style+"'><div class='mm-body__inner'><div>"+ this.widgetRows(i) +"</div></div></div>";
    
};

MediaMetricsInjectClass.widgetRows = function(blockIndex) {
    //tmp - for "text-over-image" width and height (hidden params)
    var widthToI = 240;
    var heightToI = 120;
    var spanWidthToI = 235;
    //end
    var row = '';
    var cssClass = '';
    var cssStyle = '';
    if (this.variousParams[blockIndex].type!='text-over-image'){
        if (this.variousParams[blockIndex].type=='img-big' || this.variousParams[blockIndex].type=='img-rect' || this.variousParams[blockIndex].type=='img'){
            if (this.variousParams[blockIndex].alignment=='horizontal'){
                cssStyle = 'width: '+this.variousParams[blockIndex].imgsize + 'px !important; height: auto !important;  margin-right:10px !important;';
                //height: '+(parseInt(this.variousParams[blockIndex].imgsize)*2)+'px !important;
            }
        }else{
            cssClass = 'img-no-big';
        }
    }else{
        cssClass = 'text-over-image';
    }
    var data = this.data;
    for (var index=0;index<data[blockIndex].length;index++) {
        var item=data[blockIndex][index];
        if (typeof(item) == 'object') {
            row += "<div class='mm-body__line mm-body__line--"+this.variousParams[blockIndex].lineClass+" mm-body__line--"+this.variousParams[blockIndex].font+" "+(cssClass!='' ? "mm-body__line--" + cssClass : "")+"'";
            row += " style='" ;
            if (this.variousParams[blockIndex].horizontalonewidth != undefined || this.variousParams[blockIndex].horizontaloneheight != undefined){
              
                if (this.variousParams[blockIndex].horizontalonewidth != undefined){
                  row += "width: " + this.variousParams[blockIndex].horizontalonewidth + "px !important; ";
                }
                if (this.variousParams[blockIndex].horizontaloneheight != undefined){
                  row += "height: " + this.variousParams[blockIndex].horizontaloneheight + "px !important; ";
                }
            }else{
                row += cssStyle;
            }
            if (this.variousParams[blockIndex].img=='true'){
                row += "margin-bottom: 10px !important; ";
            }
            row += "' ";
            if (this.variousParams[blockIndex].img=='true'){
                //если картиночный блок
                //некоторые стилевые приготовления...
                var lineheight = '21';
                if (this.variousParams[blockIndex].font=='small'){
                                lineheight = '15';
                }
                var spanheight = (lineheight * 3) + 'px';
                var imgsize = this.variousParams[blockIndex].imgsize;
                if (this.variousParams[blockIndex].type=='img-big'){
                    //spanheight = imgsize + 'px';
                    spanheight = 'auto';
                    //var spanwidth  = parseInt(imgsize) - 20;
                    var spanwidth = this.variousParams[blockIndex].width - imgsize - 10;
                }else{
                    if (imgsize < lineheight*2){
                        spanheight = lineheight + 'px';
                    }else if (imgsize < lineheight * 3){
                        spanheight = (lineheight * 2) + 'px';
                    }else if (imgsize < lineheight * 4){
                        spanheight = (lineheight * 3) + 'px';
                    }else if (imgsize < lineheight * 5){
                        spanheight = (lineheight * 4) + 'px';
                    }else if (imgsize < lineheight * 6){
                        spanheight = (lineheight * 5) + 'px';
                    }else if (imgsize < lineheight * 7){
                        spanheight = (lineheight * 6) + 'px';
                    }
                    if (this.variousParams[blockIndex].alignment=='vertical'){
                                    var spanwidth = this.variousParams[blockIndex].width - imgsize - 10;
                    }else{
                                    var spanwidth = 215 - imgsize - 10;
                    }
                }
                if (this.variousParams[blockIndex].type=='text-over-image'){
                    //скрытые параметры imgwidth и imgheight
                    if (typeof this.variousParams[blockIndex].imgwidth != "undefined"){
                        widthToI = this.variousParams[blockIndex].imgwidth;
                        heightToI = parseInt(widthToI / 2);
                        spanWidthToI = parseInt(widthToI) - 5;
                    }else if (typeof this.variousParams[blockIndex].imgheight != "undefined"){
                        heightToI = this.variousParams[blockIndex].imgheight;
                        widthToI = parseInt(heightToI) * 2;
                        spanWidthToI = widthToI + 5;
                    }
                }
                //row += "><a style='color: #"+this.variousParams[blockIndex].linkscolor+";' target='_blank' href='//mediametrics.ru/click;"+ this.variousParams[blockIndex].site +"?http://mediametrics.ru/rating/"+ this.variousParams[blockIndex].country +"/"+ this.variousParams[blockIndex].period +".html?article="+ item[0] +"'><img style='width: "+imgsize+"px; height: "+imgsize+"px; position: relative; float: left;' src='//mediametrics.ru/partner/inject/img/"+ item[0] +".jpg' valign='middle' style='display:inline;' /><span style='float: left; width: "+spanwidth+"px; height: "+spanheight+"; overflow: hidden; line-height: "+lineheight+"px'>"+item[1]+"</span></a></div>";
                if (item[0]=='000'){
                    row += "><a style='color: #"+this.variousParams[blockIndex].linkscolor+'; ' +(this.variousParams[blockIndex].type=='text-over-image'?'position: relative; width: auto; height: auto;':'')+"; "+(this.variousParams[blockIndex].alignment=='horizontal' && this.variousParams[blockIndex].type!='text-over-image' ? 'width: ' + this.variousParams[blockIndex].imgsize + 'px;' : '')+"' target='_blank' href='"+item[3]+"'><img style='"+(this.variousParams[blockIndex].type!='text-over-image' ?" width: "+imgsize+"px; height: "+((this.variousParams[blockIndex].type=='img-rect')? "auto;" : imgsize+"px; ") : 'width: ' + widthToI+'px;' + 'height: '+heightToI+'px;')+" position: relative; float: left;' src='" + (this.variousParams[blockIndex].type=='text-over-image'? '//mediametrics.ru/partner/inject/img/w_adv.jpg ' : "//mediametrics.ru/partner/inject/img/" + ((this.variousParams[blockIndex].type=='img-big')? 'b_': (this.variousParams[blockIndex].type=='img-rect' ? 'w_' : '')) + "adv.jpg" ) + "' valign='middle' style='display:inline;' />"+(this.variousParams[blockIndex].type=='text-over-image'? "<span style='position: absolute; left: 0; bottom: 0; text-shadow: #000 2px 2px 5px; color: #fff;  width: "+spanWidthToI+"px; font-size: "+heightToI+"%; padding-left:5px!important;background:linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9)); padding-bottom: 5px !important;'>"+item[1]+"</span>" : "<span style='float: left; overflow: hidden; " + (this.variousParams[blockIndex].alignment!='horizontal' ?  "width: "+spanwidth+"px;" : '' ) +" height: "+spanheight+";  line-height: "+lineheight+"px;'>"+item[1]+"</span>")+ "</a></div>";
                }else{
                    row += "><a style='color: #"+this.variousParams[blockIndex].linkscolor+'; ' +(this.variousParams[blockIndex].type=='text-over-image'?'position: relative; width: auto; height: auto;':'')+"; "+(this.variousParams[blockIndex].alignment=='horizontal' && this.variousParams[blockIndex].type!='text-over-image' ? 'width: ' + this.variousParams[blockIndex].imgsize + 'px;' : '')+"' target='_blank' href='//mediametrics.ru/click;"+ this.variousParams[blockIndex].site +"?//mediametrics.ru/rating/"+ this.variousParams[blockIndex].country +"/"+ this.variousParams[blockIndex].period +".html?article="+ item[0] +"'><img style='"+(this.variousParams[blockIndex].type!='text-over-image' ?" width: "+imgsize+"px; height: "+((this.variousParams[blockIndex].type=='img-rect')? "auto;" : imgsize+"px; ") : 'width: ' + widthToI+'px;' + 'height: '+heightToI+'px;')+" position: relative; float: left;' src='" + (this.variousParams[blockIndex].type=='text-over-image'? '//mediametrics.ru/partner/inject/img/w_'+ item[0] +'.jpg ' : "//mediametrics.ru/partner/inject/img/" + ((this.variousParams[blockIndex].type=='img-big')? 'b_': (this.variousParams[blockIndex].type=='img-rect' ? 'w_' : '')) + item[0] +".jpg" ) + "' valign='middle' style='display:inline;' />"+(this.variousParams[blockIndex].type=='text-over-image'? "<span style='position: absolute; left: 0; bottom: 0; text-shadow: #000 2px 2px 5px; color: #fff;  width: "+spanWidthToI+"px; font-size: "+heightToI+"%; padding-left:5px!important;background:linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9)); padding-bottom: 5px !important;'>"+item[1]+"</span>" : "<span style='float: left; overflow: hidden; " + (this.variousParams[blockIndex].alignment!='horizontal' ?  "width: "+spanwidth+"px;" : '' ) +" height: "+spanheight+";  line-height: "+lineheight+"px;'>"+item[1]+"</span>")+ "</a></div>";
                }
            }else{
                //если обычный (старый) блок
                if (item[0]=='000'){
                    row += "><a style='color: #"+this.variousParams[blockIndex].linkscolor+";' target='_blank' href='//"+item[3]+"'><img src='//mediametrics.ru/partner/inject/img/adv.ico' valign='middle' style='display:inline;' />"+item[1]+"</a></div>";
                }else{
                    row += "><a style='color: #"+this.variousParams[blockIndex].linkscolor+";' target='_blank' href='//mediametrics.ru/click;"+ this.variousParams[blockIndex].site +"?//mediametrics.ru/rating/"+ this.variousParams[blockIndex].country +"/"+ this.variousParams[blockIndex].period +".html?article="+ item[0] +"'><img src='//mediametrics.ru/favicon/"+ item[2] +".ico' valign='middle' style='display:inline;' />"+item[1]+"</a></div>";
                }
            }
        }
    }
    return row;
};


/* Data processing methods
 ----------------------------------------------- */

MediaMetricsInjectClass.dataModeration = function(callback) {

    var that = this;
    // Moderate sites White-List
    for (blockItem=0; blockItem<that.variousParams.length; blockItem++){
        if(this.variousParams[blockItem].sitegroup=='business'){
          for (var item in that.data[blockItem]) {
              that.dataModerationCheck(site_groups.business, blockItem, item, 2);
          }
        }
    }

    if (this.variousParams[0].hash != undefined) {
      this.systemRequireJs(this.tabooPath + '/' + this.variousParams[0].hash + '.js', 'Words');
      this.systemMethodAfterDefinition('MediaMetricsTaboo', function(){
        if (typeof(MediaMetricsTaboo) != 'undefined') {

            for (blockItem=0; blockItem<that.variousParams.length; blockItem++){
                MediaMetricsTaboo.sites.push('meduza.io');
                for (var item in that.data[blockItem]) {
                    // Moderate sites
                    that.dataModerationDelete(MediaMetricsTaboo.sites, blockItem, item, 2);
                    // Moderate Words
                    that.dataModerationDelete(MediaMetricsTaboo.words, blockItem, item, 1);
                }
            }
            callback();
        } else {
            callback();
        }
      });
    }else{
        callback();
    }


};

MediaMetricsInjectClass.dataModerationDelete = function(tabooArr, blockItem, item, index) {

    if (tabooArr.length > 0) {
        for (var element in tabooArr) {
            if (this.data[blockItem][item] != undefined && typeof(this.data[blockItem][item]) == 'object' && this.data[blockItem][item][index] != undefined && typeof(tabooArr[element]) == 'string') {
                var cleaned = tabooArr[element].replace('www.', '').replace('http://', '').replace('https://', '').replace('/', '');
                if (this.data[blockItem][item][index].search(new RegExp(cleaned, "i")) >= 0) {
                    delete(this.data[blockItem][item]);
                    //break;
                }
            }
        }
    }

};

MediaMetricsInjectClass.dataModerationCheck = function(tabooArr, blockitem, item, index) {

    if (tabooArr.length > 0) {
        var delete_item=true;
        for (var element in tabooArr) {
            if (this.data[blockitem][item] != undefined && typeof(this.data[blockitem][item]) == 'object' && this.data[blockitem][item][index] != undefined && typeof(tabooArr[element]) == 'string') {
                var cleaned = tabooArr[element].replace('www.', '').replace('http://', '').replace('https://', '').replace('/', '');
                if (this.data[blockitem][item][index].search(new RegExp(cleaned, "i")) >= 0) {
                    delete_item=false;
                    break;
                }
            }
        }
        if(delete_item){
            delete(this.data[blockitem][item]);
        }
    }

};

MediaMetricsInjectClass.dataCut = function() {
    var cut = [];
    for (var blidx=0; blidx<this.variousParams.length; blidx++){
      cut[blidx] = [];

      for (var i = 0; ((i < this.data[blidx].length)
              && (cut[blidx].length<this.variousParams[blidx].rows)); i++) {
          if (this.advdata.length > 0){
              for (var ai=0; ai<this.advdata.length; ai++){
                  if ((this.advdata[ai].pos-1)==i){
                      cut[blidx].push([0, this.advdata[0].title, this.advdata[0].domain, this.advdata[0].url]);
                  }
              }
          }
          if (this.data[blidx][i] != undefined) {
              cut[blidx].push(this.data[blidx][i]);
          }
      }
    }
    this.data = cut;
};

MediaMetricsInjectClass.dataShuffle = function(blockItem) {
    var arr = this.data[blockItem];
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    this.data[blockItem] = arr;
};

MediaMetricsInjectClass.dataSetId = function(blockItem) {
    var arr = this.data[blockItem];
    var i = 1;
    for (var item in arr) {
        if (typeof arr[item] == 'object') {
            arr[item].push(i);
            i++;
        }
    }
    this.data[blockItem] = arr;
};


/* System methods
 ----------------------------------------------- */

MediaMetricsInjectClass.systemFindAttributes = function() {

    var elements = document.getElementsByTagName('script');
    if (elements.length > 0) {
        for (item in elements) {

         if (typeof(elements[item]) == 'object' && elements[item].getAttribute('class') == 'MediaMetricsInjectClass') {
           this.systemRequireAttributes(elements[item]);
           //break;
         }
        }
/*
        for (var index = 0; index < elements.length; index++) {
            if (typeof(elements.item(index)) == 'object' && elements.item(index).id == 'MediaMetricsInject') {
                this.systemRequireAttributes(elements.item(index));
            }
        }
*/
    }
};

MediaMetricsInjectClass.systemRequireAttributes = function(el) {
    var vparams = {
        site:        'mmet/mynews',
        width:       800,
        height:      200,
        bgcolor:     'FFF',
        bordercolor: '000',
        linkscolor:  '232323',
        transparent: false,
        alignment:   'vertical',
        rows:        5,
        inline:      true,
        font:        'big',
        fontfamily:  'roboto',
        logo:        false,
        border:      false,
        borderwidth: 1,
        period: 'online',
        sitegroup: '',
        depth_coeff: 3,
        country:     'ru',
        adaptive:    false,
        img:         'false',
        imgsize:     '70',
        type:       'img',
        css:        false
    };
    //Ночью изменения раз в час



    var attributes = el.attributes;
    if (attributes.length > 0) {
        /*			for (item in attributes) {
         if (/^data-/.test(attributes[item].name)) {
         vparams[attributes[item].name.split('-')[1]] = attributes[item].value;
         }
         }*/

        for (var index=0;index<attributes.length;index++) {
            if (/^data-/.test(attributes.item(index).name)) {
                if (attributes.item(index).value.length > 0) {
                    vparams[attributes.item(index).name.split('-')[1]] = attributes.item(index).value;
                }
            }
        }
        if (attributes['data-imgsize'] != undefined && parseInt(attributes['data-imgsize'].value) > 0){
            vparams['img'] = 'true';
        }
    }

    var now = new Date().getHours();

/*    if (now < 8 && (vparams.period == 'online')){
        vparams.period = 'hour';
    }*/

    if (vparams.period == 'online' && (vparams['img']=='true')){
        vparams.period = 'hour';
    }

    // Calculated attributes
    if (vparams.alignment == 'vertical') {
        vparams.lineClass = vparams.inline == 'true' ?  'fixed' : 'floating';
    } else {
        vparams.lineClass = 'horizontal';
    }
    if (vparams.logo == 'true') {
        vparams.logoClass = vparams.width < 550 ? 'mm-logo--16' : 'mm-logo--26';
    } else {
        vparams.logoClass = 'mm-logo--hidden';
    }
/*
    if(this.params.sitegroup != 'all'){
        vparams.depth_coeff *=7;
    }
*/
    if (vparams.sitegroup == 'business'){
        sitegroup = '';
        for (i in site_groups.business){
            sitegroup += site_groups.business[i] + ' ';
        }
        vparams.sitegroup = sitegroup;
    }else if (vparams.sitegroup == 'all'){
        vparams.sitegroup = '';
    }
    this.variousParams.push(vparams);
};

MediaMetricsInjectClass.systemRequireJs = function(src, catchErrors) {
    var that = this;
    var js = document.createElement('script');
    js.src = src;
    js.async = 'true';
    js.onerror = function() {
        that['systemRequireJsError' + catchErrors] = 1;
    }
    js.setAttribute('data-mmnoparse', 'true');
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(js);
};

MediaMetricsInjectClass.systemRequireCss = function() {
    var css = document.createElement('link');
    if (this.variousParams[0].fontfamily=='roboto'){
        css.href = this.dir + 'inject.css';
    }else{
        css.href = this.dir + 'inject_noff.css';
    }
    css.media = 'screen';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.id = 'mediametrics';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(css);

};

MediaMetricsInjectClass.systemRequireCustomCss = function(path) {
    var css = document.createElement('link');
    css.href = path;
    css.media = 'screen';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(css);

};

MediaMetricsInjectClass.systemMethodAfterDefinition = function(variable, method) {
    if (typeof window[variable] != 'undefined' || this.systemRequireJsErrorWords == 1){
        method();
    } else {
        var that = this;
        setTimeout(function(){
            that.systemMethodAfterDefinition(variable, function() {
                method();
            });
        }, 250);
    }
};


/* Counter methods
 ----------------------------------------------- */

MediaMetricsInjectClass.counterEvent = function() {
    (window.attachEvent) ? window.attachEvent('scroll', function(){ MediaMetricsInjectClass.counterScroll(); }) : window.addEventListener('scroll', function(){ MediaMetricsInjectClass.counterScroll(); }, false);
};

MediaMetricsInjectClass.counterScroll = function() {
    if (this.counterVisible(this.$wrapper)) {
        //console.debug('Visible!');
        this.counterInsert();
    }
};

MediaMetricsInjectClass.counterPosition = function (el) {
    var offset = 0;
    while(el) {
        offset += el["offsetTop"];
        el = el.offsetParent;
    }
    return offset;
};

MediaMetricsInjectClass.counterVisible = function (el) {
    if (!el) {
        return false;
    }
    var posTop = this.counterPosition(el);
    var posBottom = posTop + el.offsetHeight;
    var visibleTop = (document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop);
    var visibleBottom = visibleTop + window.innerHeight;
    return ((posBottom >= visibleTop) && (posTop <= visibleBottom));
};

MediaMetricsInjectClass.counterInsert = function () {
    var idName = 'mm-counter';
    if (document.getElementById(idName) == null) {
        new Image().src = "//counter.yadro.ru/hit;"+ this.variousParams[0].site +"?r"+
        escape(document.referrer)+((typeof(screen)=="undefined")?"":
        ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
        screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
        ";"+Math.random();

        var elm = document.createElement('div');
        elm.id = idName;
        elm.style.display = 'none';
        this.$wrapper.appendChild(elm);
        /*
        var counter = document.createElement('div');
        counter.id = idName;
        counter.innerHTML = '<img src="//counter.yadro.ru/hit;'+ this.params.site +'?r'+
            escape(document.referrer)+((typeof(screen)=='undefined')?'':
            ';s'+screen.width+'*'+screen.height+'*'+(screen.colorDepth?
                screen.colorDepth:screen.pixelDepth))+';u'+escape(document.URL)+
            ';hru;'+Math.random()+
            '" width=1 height=1 alt="">';
        this.$wrapper.appendChild(counter);
        */
    }
};

}

/* Call
 ----------------------------------------------- */

 (function() {
 var that = this;
 (window.attachEvent) ? window.attachEvent('onload', MediaMetricsInjectClass.init()) : window.addEventListener('load', MediaMetricsInjectClass.init(), false);
 })();
