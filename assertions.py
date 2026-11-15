"""Independent business assertions; shared workbook preservation remains in parent."""
def expected(state,fixture):
 value=dict(fixture['expected'])
 return value
def checks(state,fixture,table,actual_rows):
 value={r.get("key"):r.get("value") for r in table}
 return {'carrier_scan_not_label':value.get('R1')=='In transit' and value.get('R2')=='Pending'}
