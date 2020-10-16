<template>
  <div>
    <!-- ===============  Section 1 =============== -->

    <div id="section-one">
      <img id="rectangle-one" alt="" src="~assets/rectangle_midnight_blue.svg">
      <img id="triangle-one" alt="" src="~assets/triangle_humming_bird.svg">
      <img id="vector-one" alt="" src="~assets/ellipse_yellow.svg">
      <img id="vector-two" alt="" src="~assets/vector_pink.svg">
      <img id="vector-three" alt="" src="~assets/vector_midnight_blue.svg">

      <div id="social-box">
        <nuxt-link to="https://github.com/iamvivekkaushik" target="_blank">
          <img id="github-social" class="social-icons" alt="Github Link" src="~assets/github.png">
        </nuxt-link>
        <nuxt-link to="https://www.instagram.com/iamvivekkaushik/" target="_blank">
          <img id="insta-social" class="social-icons" alt="Instagram Link" src="~assets/insta_outline.png">
        </nuxt-link>
        <nuxt-link to="https://twitter.com/iamvivekkaushik" target="_blank">
          <img id="twitter-social" class="social-icons" alt="Twitter Link" src="~assets/twitter_outline.png">
        </nuxt-link>
      </div>

      <div id="section-one-main">
        <div id="intro">
          <p class="color-black-russian text-intro"><span class="color-dark-pink">Hello,</span> I am Vivek Kumar.</p>
          <h1 class="color-prussian-blue">Developer</h1>
          <p class="color-rock-blue subtext">I write code, design stuff and make apps.</p>
          <div style="margin-top: 60px">
            <a href="mailto:me@vivekkaushik.com" target="_blank"><button class="button-pink">Hire Me</button></a>
            <a href="static/vivek_kumar_resume.pdf" target="_blank"><button class="button-outline">Get CV</button></a>
          </div>
        </div>
        <img class="profile_pic" id="me-one" alt="Photo of Vivek Kaushik" src="~assets/section_one_main.svg">
      </div>
    </div>

    <!-- ===============  Section 2 =============== -->

    <div id="section-two">
      <div class="card">
        <div class="section-heading">
          <p class="color-dark-pink section-heading-paragraph">WHO AM I</p>
          <h3 class="section-heading-text">ABOUT ME</h3>
        </div>
        <br>
        <p class="color-rock-blue about-paragraph" style="text-align: center">I’m Vivek, a 22-year-old self-taught
          developer, from India.</p>
        <p class="color-rock-blue about-paragraph">
          I've always been fascinated by technology, and as far as I can remember I have always wanted to do something with
          computers or in other words I've always wanted to be a programmer which I didn't know at that time. After High
          School, I started teaching myself how to code. Spent countless hours on YouTube watching tutorials, reading blog
          posts on the internet and writing code. I started teaching myself how to make mobile apps which was an amazing
          experience.
          <br><br>
          In early 2019 I got a job in a Noida based startup. There I worked as a Tech Lead working on technologies like
          Flutter, Angular, Django. I worked on many projects, created mobile apps and CRM systems and also did some
          web development.
          <br><br>
          I always want to learn more, do more, and be more. I’m hard-working, super curious, passionate, committed, and
          also a fast learner!</p>
      </div>

      <img id="triangle-two" alt="" src="~assets/triangle_border_midnight_blue.svg">
      <img id="triangle-three" alt="" src="~assets/triangle_yellow.svg">
    </div>

    <!-- ===============  Section 3 =============== -->
    <div id="section-three">
      <img id="vector-four" alt="" src="~assets/vector_pink.svg">
      <img id="rectangle-two" alt="" src="~assets/rectangle_midnight_blue.svg">
      <img id="triangle-five" alt="" src="~assets/triangle_humming_bird.svg">
      <img id="vector-five" alt="" src="~assets/ellipse_yellow.svg">

      <div class="section-heading">
        <p class="color-dark-pink section-heading-paragraph">SKILLS</p>
        <h3 class="section-heading-text">TECH STACK</h3>
      </div>

      <div id="section-three-container" class="flex-container">
        <img class="tech_stack_pic" alt="" src="~assets/tech_stack_image.svg">
        <div id="tech-icons" class="flex-container flex-row">
          <div class="flex-container flex-column">
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/flutter.svg">
              <p>Flutter</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/android.svg">
              <p>Android</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/java.svg">
              <p>Java</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/typescript.svg">
              <p>Type Script</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/django.svg">
              <p>Django</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/angular.svg">
              <p>Angular</p>
            </div>
          </div>
          <div class="flex-container flex-column">
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/html.svg">
              <p>HTML</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/css.svg">
              <p>CSS</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/git.svg">
              <p>Git</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/python.svg">
              <p>Python</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/mysql.svg">
              <p>MySql</p>
            </div>
            <div class="flex-container justify-start">
              <img alt="" src="~assets/icons/firebase.svg">
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>

      <img id="triangle-four" alt="" src="~assets/triangle_midnight_blue.svg">
    </div>

    <!-- ==============  Section 4 ================ -->
    <div id="section-four">
      <img id="triangle-six" alt="" src="~assets/triangle_yellow.svg">

      <div class="card">
        <div class="section-heading">
          <p class="color-dark-pink section-heading-paragraph">WHAT I DO</p>
          <h3 class="section-heading-text">SPECIALIZING IN</h3>
        </div>

        <div id="skill-section" class="flex-container flex-column">
          <div class="flex-container skill-row">
            <div class="flex-container">
              <img alt="" src="~assets/app_development.svg">
              <div class="skill-text-container">
                <h3 class="color-prussian-blue skill-text-heading">App Development</h3>
                <p class="color-rock-blue skill-text-about">App Development with Flutter and Java.</p>
              </div>
            </div>

            <div class="flex-container">
              <img alt="" src="~assets/api_development.svg">
              <div class="skill-text-container">
                <p class="color-prussian-blue skill-text-heading">API Development</p>
                <p class="color-rock-blue skill-text-about">Backend system and API development with Django.</p>
              </div>
            </div>
          </div>

          <div class="flex-container skill-row">
            <div class="flex-container">
              <img alt="" src="~assets/web_development.svg">
              <div class="skill-text-container">
                <h3 class="color-prussian-blue skill-text-heading">Web Development</h3>
                <p class="color-rock-blue skill-text-about">Web Development with HTML, CSS and TypeScript.</p>
              </div>
            </div>

            <div class="flex-container">
              <img alt="" src="~assets/ui_ux.svg">
              <div class="skill-text-container">
                <p class="color-prussian-blue skill-text-heading">UI/UX</p>
                <p class="color-rock-blue skill-text-about">Landing pages, User Flow, Prototyping, Mobile app design.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <img id="rectangle-three" alt="" src="~assets/rectangle_midnight_blue.svg">
    </div>

    <!-- ==============  Section 5 ================ -->
    <div id="section-five">
      <img id="triangle-seven" alt="" src="~assets/triangle_midnight_blue.svg">
      <img id="vector-six" alt="" src="~assets/vector_light_blue.svg">
      <div class="section-heading">
        <p class="color-dark-pink section-heading-paragraph">MY PROJECTS</p>
        <h3 class="section-heading-text">PORTFOLIO</h3>
      </div>

      <div>
        <div v-for="(project, index) in projects" class="flex-container">
          <div class="project-screenshot">
            <!--  Container for the project icon  -->
            <img :src="project.image">
          </div>
          <div class="project-description">
            <!--  Container for project description -->
            <h3>{{ project.name }}</h3>
            <p class="color-rock-blue">{{ project.desc }}</p>
            <div style="margin-top: 60px">
              <a :href="project.demo" target="_blank"><button class="button-pink">Demo</button></a>
              <a :href="project.source" target="_blank" v-bind:class={'hide':false}>
                <button class="button-outline">Source</button>
              </a>
            </div>
          </div>
      </div>

      <img id="triangle-eight" alt="" src="~assets/triangle_border_midnight_blue.svg">
      <img id="vector-seven" alt="" src="~assets/vector_pink.svg">
    </div>

    <!-- ==============  Section 6 ================ -->
    <div id="section-six">
      <div class="card">
        <p>Have Any Project In Mind? <span class="color-dark-pink">Say Hello At</span></p>
        <a id="email" href="mailto:me@vivekkaushik.com" target="_blank">me@vivekkaushik.com</a>
      </div>
      <img id="rectangle-five" alt="" src="~assets/rectangle_midnight_blue.svg">
      <img id="triangle-nine" alt="" src="~assets/triangle_humming_bird.svg">
      <img id="vector-eight" alt="" src="~assets/ellipse_yellow.svg">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Router Manager JioFi', image: 'assets/projects/jiofi_manager.png', desc: 'This was the first app I published. Initially I ' +
              'made this app for my own use, in India there is this portable wifi device called JioFi. I was using it to connect to the ' +
              'internet, but it was a pain to know the status for network or battery level of the device. So, I created this app to make it ' +
              'easier for me to manage the JioFi device. Then I added more features to it and published it on Google Play Store for others to ' +
              'use.', demo: 'https://play.google.com/store/apps/details?id=com.vivek.jiofimanager&hl=en_IN', source: ''
        }
      ],
      showScrollButton: false
    }
  },
  // layout: 'admin',
  head() {
    return {
      title: 'Vivek Kaushik | A 22 Year old developer from India 🇮🇳',
    }
  },
}
</script>

<style scoped>
@import '../assets/css/index.css';
</style>
