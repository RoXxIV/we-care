<script setup lang="ts"></script>

<template>
  <header>
    <div id="logo">
      <router-link to="/"><span>We</span>Care</router-link>
    </div>
    <nav>
      <button>Obtenir un devis</button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  background: var(--white);
  #logo {
    font-size: 1.4em;
    font-weight: bold;
    span:first-child {
      color: var(--purple);
    }
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 2.2rem;
    background: var(--purple);
    color: var(--white);
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    &:hover {
      background: #4a2c8f;
    }
  }
}
</style>
