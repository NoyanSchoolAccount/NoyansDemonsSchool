import { embed } from '../util.js';

document.title = "Future Levels";

export default {
  name: 'FuturePage',
  data() {
    return {
      levels: []
    };
  },
  created() {
    fetch('data/future_levels.json')
      .then(res => res.json())
      .then(levels => {
        this.levels = levels;
      });
  },
  template: `
    <div class="future-levels-container">
      <div v-for="level in levels" :key="level.id" class="future-level">
        <img class="future-level-thumb" :src="level.thumbnail" :alt="level.name + ' thumbnail'">
        <div class="future-level-info">
          <h2>{{ level.name }}</h2>
          <p><strong>Best Percent:</strong> {{ level.bestPercent }}%</p>
          <p><strong>Verifier(s):</strong> {{ level.verifiers.join(', ') }}</p>
          <p><strong>Creator(s):</strong> {{ level.creators.join(', ') }}</p>
        </div>
      </div>
    </div>
  `
};