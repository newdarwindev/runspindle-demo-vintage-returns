/* Business-owned workflow. Only injected UI capabilities; no harness or fixture state access. */
const path=require('path');
module.exports.scopes=["A/seller-vintage", "B/seller-vintage"];
module.exports.execute=async function({rows,p,open,login,click,event,operatorMode,unresolved,runDir}){let result;
result=Object.fromEntries(rows.filter(r=>r.account==='seller-vintage').map(r=>[r.id,r.carrierScan?'In transit':'Pending']))
return result;};
