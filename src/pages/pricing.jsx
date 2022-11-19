export default () =>
  <>
    <div class="mt-5"></div>
    <div class="container" style="max-width: 720px;">
      <h2 class="mb-4">Pricing tiers</h2>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Price</th>
            <th>Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Non-commercial</th>
            <td>Free</td>
            <td>Non-commercial endeavours, OSS projects</td>
          </tr>
          <tr>
            <th>Freelancer</th>
            <td>Companies/freelancers with revenue <span title="Less than ...">&lt;</span> $100,000/year</td>
            <td>
              $9.95 monthly* (excl VAT)<br /><br />
              (unlimited production instances)
            </td>
          </tr>
          <tr>
            <th>Professional</th>
            <td>Companies with revenue <span title="Greater than ...">&gt;</span> $100,000/year</td>
            <td>
              $99.95 monthly* (excl VAT)<br /><br />
              per production instance<br/><br/>
              <em>Note: An instance can have unlimited replicas</em>
            </td>
          </tr>
        </tbody>
      </table>

      <p>For information about payment, please email <a href="mailto:bjorn.a.goransson@gmail.com">bjorn.a.goransson@gmail.com</a>. Launched early ... 😂</p>
    </div>
  </>;
