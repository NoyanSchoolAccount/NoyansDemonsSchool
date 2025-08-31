import { embed } from '../util.js';

document.title = "Future Levels";

const container = document.createElement('div');
container.className = 'future-levels-container';

fetch('data/future_levels.json')
  .then(res => res.json())
  .then(levels => {
    levels.forEach(level => {
      const div = document.createElement('div');
      div.className = 'future-level';

      div.innerHTML = `
        <img class="future-level-thumb" src="${level.thumbnail}" alt="${level.name} thumbnail">
        <div class="future-level-info">
          <h2>${level.name}</h2>
          <p><strong>Best Percent:</strong> ${level.bestPercent}%</p>
          <p><strong>Verifier(s):</strong> ${level.verifiers.join(', ')}</p>
          <p><strong>Creator(s):</strong> ${level.creators.join(', ')}</p>
        </div>
      `;
      container.appendChild(div);
    });
  });

document.body.appendChild(container);