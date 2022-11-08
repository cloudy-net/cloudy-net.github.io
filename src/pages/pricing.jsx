export default () =>
  <>
    <div class="mt-5"></div>
    <div class="container" style="max-width: 720px;">
      <h2 class="mb-4">Pricing tiers</h2>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Non-commercial</th>
            <th>Freelancer</th>
            <th>Professional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Non-commercial endeavours, OSS projects</td>
            <td>Companies/freelancers with revenue <span title="Less than ...">&lt;</span> $100,000/year</td>
            <td>Companies with revenue <span title="Greater than ...">&gt;</span> $100,000/year</td>
          </tr>
          <tr>
            <td>Free</td>
            <td>
              $9.95 monthly* (excl VAT)<br /><br />
              (unlimited production instances)
            </td>
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
