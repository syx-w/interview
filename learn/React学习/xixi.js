(function () {   
    var sql = "select * from tlk_基础企业信息表 where item_客户合作类型='"+""+"'";   
    var query=queryBySQL(sql);
})();

var lx="";

    //if(gj == "车队代理")   {lx = "TransportationCompany";} 



(function () {   
    var doc = getCurrentDocument();   
    var gj= doc.getItemValueAsString("代理公司类型");  var lx="";
    if(gj == "车队代理")   {lx = "TransportationCompany";} 
    var sql = "select * from tlk_基础企业信息表 where item_客户合作类型='"+lx+"'"; 
    var opts=$TOOLS.createOptions();
    var datas = queryBySQL(sql);
    if (datas != null && datas != "") {
        for (var iter = datas.iterator(); iter != null && iter.hasNext(); ) {
            var cdoc = iter.next();
            if (cdoc != null) {
                var xianshi= cdoc.getItemValueAsString("企业名称");
                 var zhenshi = cdoc.getItemValueAsString("语言标签");
                opts.add(xianshi,zhenshi);  println(opts);
            }
        }
    }
      return opts;   
  })();


  (function () {   
    var doc = getCurrentDocument();   
    var gj= doc.getItemValueAsString("代理公司类型");  var lx="";
    if(gj == "车队代理")   {lx = "TransportationCompany";} 
    var sql = "select * from tlk_基础企业信息表 where item_客户合作类型='"+lx+"'";   println("代理公司类型"+sql);
    var opts=$TOOLS.createOptions();
    var datas = queryBySQL(sql);
    if (datas != null && datas != "") {
        for (var iter = datas.iterator(); iter != null && iter.hasNext(); ) {
            var cdoc = iter.next();
            if (cdoc != null) {
                var xianshi= cdoc.getItemValueAsString("企业名称");
                 var zhenshi = cdoc.getItemValueAsString("语言标签");
                opts.add(xianshi,zhenshi);  println(opts);
            }
        }
    }
      return opts;   
  })();

  sql = "select * from tlk_业务商品_成本报价 where PARENT ='" + getId()+ "'";
  var query = queryBySQL(sql);
  var ret = 0;
  if(query != null || query != "[]")  {
   for(var it = query.iterator(); it.hasNext();) {
    var doc = it.next(); ret = ret + doc.getItemValueAsDouble("运费小计"); 
   } }
  ret;




  if(getCurrentDocument().getIstmp()) {
    var cdoc = getCurrentDocument();
    var docid=decodeURI(getParameter("htid"));
    var process = getDocumentProcess();
    var pdoc = process.doView(docid);
    if(pdoc != null) {
    var docs = pdoc.getChilds();
    for(var it = docs.iterator(); it.hasNext(); ) { 
        var docori =it.next();  	
        if(docori.getFormname().endsWith("商品详单_合同")){	
        var processywsp = getDocumentProcess();
        var formNameywsp ="业务商品_采购";   
        var formProcessywsp = getFormProcess();       
        var formywsp = formProcessywsp.doViewByFormName(formNameywsp,getApplication());
        var doc1 = processywsp.doNew(formywsp,getWebUser(),new Packages.cn.myapps.base.action.ParamsTable());
            doc1.addStringItem("商品编号",docori.getItemValueAsString("商品编号"));  
            doc1.addStringItem("规格编号",docori.getItemValueAsString("规格编号"));  
            doc1.addStringItem("名称", docori.getItemValueAsString("名称")); 
            doc1.addStringItem("规格" ,docori.getItemValueAsString("规格")); 
            doc1.addStringItem("单位", docori.getItemValueAsString("单位"));  
            doc1.addStringItem("数量", docori.getItemValueAsInt("数量"));
            doc1.addStringItem("要求", docori.getItemValueAsString("要求")); 
            doc1.addStringItem("备注", docori.getItemValueAsString("备注"));  
            doc1.addStringItem("单价",docori.getItemValueAsDouble("单价"));
            doc1.addStringItem("金额小计", docori.getItemValueAsDouble("金额小计"));  
            doc1.addStringItem("单位重量",docori.getItemValueAsDouble("单位重量"));
            doc1.addStringItem("重量小计",docori.getItemValueAsDouble("重量小计"));
            doc1.addStringItem("价格依据",docori.getItemValueAsString("价格依据"));
            doc1.addStringItem("价格依据说明",docori.getItemValueAsString("价格依据说明"));  
    
            doc1.setParent(cdoc.getId());
            processywsp.doCreate(doc1);  
    }		
    }
    }


    
    }