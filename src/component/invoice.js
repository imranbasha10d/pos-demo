export default function Invoice(props) {
  
  let{width,height}=props
  return (
    <div class="container" style={{maxWidth:width}} >
      <div class="card">
        <div class="card-header">
          Invoice
          <strong>01/01/2020</strong>
          <span class="float-right">
            {" "}
            <strong>Status:</strong> Pending
          </span>
        </div>
        <div class="card-body">
          <div class="row mb-4">
            <div class="col-sm-6">
              <h6 class="mb-3">From:</h6>
              <div>
                <strong>DotNetTec</strong>
              </div>
              <div>Madalinskiego 8</div>
              <div>71-101 Szczecin, Poland</div>
              <div>Email: info@dotnettec.com</div>
              <div>Phone: +91 9800000000</div>
            </div>

            <div class="col-sm-6">
              <h6 class="mb-3">To:</h6>
              <div>
                <strong>Robert Maxwel</strong>
              </div>
              <div>Attn: Daniel Marek</div>
              <div>43-190 Mikolow, Poland</div>
              <div>Email: robert@daniel.com</div>
              <div>Phone: +48 123 456 349</div>
            </div>
          </div>

          <div class="table-responsive-sm">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="center">#</th>
                  <th>Item</th>
                  <th>Description</th>

                  <th class="right">Unit Cost</th>
                  <th class="center">Qty</th>
                  <th class="right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="center">1</td>
                  <td class="left strong">Origin License</td>
                  <td class="left">Extended License</td>

                  <td class="right">$999,00</td>
                  <td class="center">1</td>
                  <td class="right">$999,00</td>
                </tr>
                <tr>
                  <td class="center">2</td>
                  <td class="left">Custom Services</td>
                  <td class="left">
                    Instalation and Customization (cost per hour)
                  </td>

                  <td class="right">$150,00</td>
                  <td class="center">20</td>
                  <td class="right">$3.000,00</td>
                </tr>
                <tr>
                  <td class="center">3</td>
                  <td class="left">Hosting</td>
                  <td class="left">1 year subcription</td>

                  <td class="right">$499,00</td>
                  <td class="center">1</td>
                  <td class="right">$499,00</td>
                </tr>
                <tr>
                  <td class="center">4</td>
                  <td class="left">Platinum Support</td>
                  <td class="left">1 year subcription 24/7</td>

                  <td class="right">$3.999,00</td>
                  <td class="center">1</td>
                  <td class="right">$3.999,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-5"></div>

            <div class="col-lg-4 col-sm-5 ml-auto">
              <table class="table table-clear">
                <tbody>
                  <tr>
                    <td class="left">
                      <strong>Subtotal</strong>
                    </td>
                    <td class="right">$8.497,00</td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Discount (20%)</strong>
                    </td>
                    <td class="right">$1,699,40</td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>VAT (10%)</strong>
                    </td>
                    <td class="right">$679,76</td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Total</strong>
                    </td>
                    <td class="right">
                      <strong>$7.477,36</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
