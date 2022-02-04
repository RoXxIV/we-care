<script setup lang="ts"></script>

<template>
  <section>
    <div id="info">
      <h1>
        Votre assurances <br />
        à portée de click
      </h1>
      <ul>
        <li>
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'check-circle']"
          />
          10% mobile et flexible
        </li>
        <li>
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'check-circle']"
          />
          100% prise de tête
        </li>
        <li>
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'check-circle']"
          />
          au juste prix ?
        </li>
      </ul>
      <button>Obtenir un devis gratuitement</button>
    </div>
    <div id="rate">
      <img
        id="illustration"
        src="@/assets/images/windows.png"
        alt="illustration d'une fenetre"
      />
      <ul>
        <li>
          <p>
            <span class="score">1.6</span>
            <font-awesome-icon
              class="font-awesome-icon-apple"
              :icon="['fas', 'apple-alt']"
            />
            Roxx store
          </p>
          <font-awesome-icon
            class="font-awesome-icon-star"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'star']"
          />
        </li>
        <li>
          <p>
            <span class="score">4.2</span>
            <font-awesome-icon
              class="font-awesome-icon"
              :icon="['fas', 'air-freshener']"
            />
            DonTrust
          </p>
          <font-awesome-icon
            class="font-awesome-icon-star"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            class="font-awesome-icon-star"
            :icon="['fas', 'star-half-alt']"
          />
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'star']"
          />
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fas', 'star']"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 170px;
  #info {
    color: var(--white);
    h1 {
      margin: 0;
      font-size: 2em;
      letter-spacing: 1.5px;
    }
    ul {
      font-size: 1.3em;
      line-height: 35px;
      .font-awesome-icon {
        color: var(--green);
      }
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 2.2rem;
      background: var(--green);
      color: var(--black);
      font-size: 1.1em;
      cursor: pointer;
      transition: all 0.3s ease 0s;
      &:hover {
        background: #61cebb;
      }
    }
    @media (max-width: 991.98px) {
      margin-bottom: 50px;
    }
  }
  #rate {
    position: relative;
    #illustration {
      position: absolute;
      top: -120%;
      left: 50%;
      z-index: -3;
      max-width: 500px;
      @media (max-width: 1350px) {
        max-width: 400px;
        top: -90%;
      }
      @media (max-width: 991.98px) {
        display: none;
      }
    }
    ul {
      display: flex;
      li {
        width: 150px;
        margin: 0 20px;
        padding: 18px;
        border-radius: 30px;
        border: 2px solid var(--black);
        background: var(--white);
        text-align: center;
        .font-awesome-icon-star {
          color: #ffd734;
        }
        span {
          margin-right: 10px;
          color: #6f43d6;
          font-weight: bold;
        }
      }
      @media (max-width: 611.98px) {
        display: none;
      }
    }
  }
  @media (max-width: 991.98px) {
    flex-direction: column;
    padding-top: 70px;
    text-align: center;
  }
}
</style>
