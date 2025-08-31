import { embed } from '../util.js';

document.title = "Noyan's Demons";

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
  methods: {
    getEmbedUrl(video) {
      if (!video) return '';
      // Extract YouTube ID from URL
      const match = video.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
      return match ? `https://www.youtube.com/embed/${match[1]}` : '';
    }
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
          <iframe
            v-if="level.video"
            :src="getEmbedUrl(level.video)"
            width="300"
            height="170"
            frameborder="0"
            allowfullscreen
            style="margin-top:1em;"
          ></iframe>
        </div>
      </div>
    </div>
  `
};