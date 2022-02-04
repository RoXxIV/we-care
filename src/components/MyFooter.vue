<script setup lang="ts"></script>

<template>
  <footer>
    <!--Reseau-->
    <ul id="social">
      <li>
        <a
          href="https://www.linkedin.com/in/evan-hermier-799b48121/"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="@/assets/images/linkedin.png" alt="logo linkedin"
        /></a>
      </li>
      <li>
        <a
          href="https://github.com/RoXxIV"
          target="_blank"
          rel="noopener noreferrer"
          ><img src="@/assets/images/github.png" alt="logo github"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: var(--white);
  padding: 20px 0;
  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 0 15px;
    }
  }
}
</style>
