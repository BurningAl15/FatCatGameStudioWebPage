<template>
  <div class="privacy-detail-page">
    <div class="container">
      <router-link to="/privacy" class="back-button">
        <span>←</span> Back to Privacy Policies
      </router-link>

      <div class="privacy-content glass-card animate-fade-in-up">
        <h1 class="text-gradient">🔮 Memorama: Match the Runes</h1>
        <p class="subtitle">Privacy Policy</p>

        <div class="content">
          <p class="intro">
            This privacy policy governs your use of the software application Memorama: Match the Runes for Android mobile devices that was created by FatCat Game Studio.
          </p>

          <section>
            <h2>What Information We Collect?</h2>
            <p>
              Application does not collect personal information like name, surname, age, date of birth, etc.
            </p>
            <p>
              We use Google supplied APP performance tracking information to improve Application. This application only makes use of the sound your Android mobile phone can play to hear some sound effects.
            </p>
          </section>

          <section>
            <h2>Google Analytics</h2>
            <ul>
              <li>This Application uses Google Analytics to help us analyze how you use app. It helps us to improve this product.</li>
              <li>Thanks Google Analytics we know how long you use app, what kind of device you're using, where are you from and a little bit more. All this is used to improve the app.</li>
              <li>Read more about Google Analytics</li>
            </ul>
          </section>

          <section>
            <h2>Advertisement</h2>
            <p>Google Admob privacy policy is here: <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank">https://support.google.com/admob/answer/6128543?hl=en</a></p>
            <ul>
              <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website.</li>
              <li>Google's use of the DoubleClick cookie enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting Ads Settings. (Alternatively, you can direct users to opt out of a third-party vendor's use of cookies for interest based advertising by visiting aboutads.info.)</li>
            </ul>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              To contact us please use email: <a href="mailto:fatcatgamestudio.oc@gmail.com">fatcatgamestudio.oc@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyMatchTheRunes'
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
    margin-bottom: $space-6;
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
  }
}
</style>
