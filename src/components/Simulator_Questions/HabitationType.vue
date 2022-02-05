<script setup lang="ts"></script>

<template>
  <section>
    <h1>Mon type de <span>logement</span></h1>
    <ul>
      <li>
        <font-awesome-icon class="font-awesome-icon" :icon="['fas', 'home']" />
        Maison
      </li>
      <li>
        <font-awesome-icon class="font-awesome-icon" :icon="['fas', 'igloo']" />
        Igloo
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 50%;
  margin: auto;
  margin-top: 100px;
  padding: 50px 0 70px 0;
  border: 2px solid var(--black);
  border-radius: 20px;
  background: var(--white);
  text-align: center;
  h1 span {
    color: var(--purple);
  }
  ul {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    li {
      margin: 0 50px;
      padding: 50px;
      border: 2px solid var(--black);
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        border-color: var(--purple);
      }
      .font-awesome-icon {
        font-size: 5em;
        display: block;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
