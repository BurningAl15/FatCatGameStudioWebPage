<template>
  <div class="privacy-detail-page">
    <div class="container">
      <router-link to="/privacy" class="back-button">
        <span>←</span> Back to Privacy Policies
      </router-link>

      <div class="privacy-content glass-card animate-fade-in-up">
        <h1 class="text-gradient">🥐 Slothy's Bakery</h1>
        <p class="subtitle">Privacy Policy</p>

        <div class="content">
          <p class="intro">
            FatCat Game Studio built the Slothys Bakery app as an Ad Supported app. This SERVICE is provided by FatCat Game Studio at no cost and is intended for use as is.
          </p>
          
          <p>
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
          </p>

          <p>
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>

          <section>
            <h2>Information Collection and Use</h2>
            <p>
              For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Android advertising ID. The information that we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
              The app does use third party services that may collect information used to identify you.
            </p>
            <p>Link to privacy policy of third party service providers used by the app:</p>
            <ul>
              <li>Google Play Services</li>
            </ul>
          </section>

          <section>
            <h2>Log Data</h2>
            <p>
              We want to inform you that whenever you use our Service, in the case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
            </p>
            <p>
              This Service does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            </p>
          </section>

          <section>
            <h2>Service Providers</h2>
            <p>We may employ third-party companies and individuals due to the following reasons:</p>
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2>Links to Other Sites</h2>
            <p>
              This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
              <a href="mailto:aldhairvera15@gmail.com">aldhairvera15@gmail.com</a>
            </p>
            <p class="effective-date">This privacy policy page was created at privacypolicytemplate.net and modified/generated by App Privacy Policy Generator.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacySlothysBakery'
};
</script>

<style lang="scss" scoped>
@use "@/styles/design-system.scss" as *;

.privacy-detail-page {
  min-height: 100vh;
  padding: $space-8 $space-4;
}

.container {
  max-width: $container-md;
  margin: 0 auto;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  color: $accent-cyan;
  text-decoration: none;
  font-weight: $font-semibold;
  margin-bottom: $space-6;
  transition: all $transition-fast;

  &:hover {
    color: lighten($accent-cyan, 10%);
    transform: translateX(-4px);
  }
}

.privacy-content {
  padding: $space-10 $space-8;

  @media (max-width: $breakpoint-md) {
    padding: $space-6 $space-4;
  }

  h1 {
    font-size: $text-4xl;
    font-weight: $font-black;
    margin-bottom: $space-2;
    text-align: center;
  }

  .subtitle {
    text-align: center;
    color: $text-secondary;
    font-size: $text-lg;
    margin-bottom: $space-8;
  }

  .intro {
    font-size: $text-lg;
    margin-bottom: $space-4;
  }
}

.content {
  p {
    color: $text-secondary;
    line-height: $leading-relaxed;
    margin-bottom: $space-4;
  }

  section {
    margin-bottom: $space-8;

    h2 {
      font-size: $text-2xl;
      font-weight: $font-bold;
      color: $accent-cyan;
      margin-bottom: $space-4;
    }

    ul {
      list-style: disc;
      margin-left: $space-6;
      color: $text-secondary;

      li {
        margin-bottom: $space-2;
        line-height: $leading-relaxed;
      }
    }

    a {
      color: $accent-cyan;
      text-decoration: none;
      font-weight: $font-semibold;

      &:hover {
        text-decoration: underline;
      }
    }

    .effective-date {
      font-style: italic;
      font-size: $text-sm;
      opacity: 0.8;
      margin-top: $space-4;
    }
  }
}
</style>
