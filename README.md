# A label is not a returned parcel

Fictional demo execution.

Accounts and permitted scope: {"mock-marketplace": "seller-vintage", "mock-excel": "vintage"}; read source records and edit only this case’s workbook rows.

Start: reset fixture; existing workbook preserves unrelated rows/formulas.

Exception: Buyer account blocks all worker reads until owner switches to authorized seller.

Independent expected result: {"R1": "In transit", "R2": "Pending"}

From recursive parent checkout: `python tools/demo.py reset vintage-returns`, `python tools/demo.py run vintage-returns`, `python tools/demo.py record vintage-returns`.
