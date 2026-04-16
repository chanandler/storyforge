/**
 * StoryForge — Main Entry Point
 * Initializes the game and connects all systems
 */

(() => {
  'use strict';

  function boot() {
    // Initialize UI
    UI.init();

    // Set up engine callbacks
    Engine.setCallbacks(
      // onStateChange
      (state) => {
        UI.updateStatusBar(state);
      },
      // onSceneChange
      (sceneId, scene) => {
        UI.renderScene(sceneId, scene);
      }
    );

    // Check for saved game
    if (Engine.hasSave()) {
      const loaded = Engine.loadGame();
      if (loaded) {
        const state = Engine.getState();
        // Go to title but show "continue" option
        Engine.goToScene('title');
        // Add continue option
        const choicesPanel = document.getElementById('choices-panel');
        const continueBtn = document.createElement('button');
        continueBtn.className = 'choice-btn';
        continueBtn.textContent = '💾 Continue Saved Game';
        continueBtn.style.borderLeftColor = 'var(--accent-green)';
        continueBtn.style.animationDelay = '0s';
        continueBtn.addEventListener('click', () => {
          Engine.loadGame();
          const savedState = Engine.getState();
          Engine.goToScene(savedState.currentScene);
          UI.showNotification('Game loaded!');
        });
        choicesPanel.insertBefore(continueBtn, choicesPanel.firstChild);
        return;
      }
    }

    // Start fresh
    Engine.goToScene('title');
  }

  // Boot when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
