<script>

import Icons from './icons';
import {slidesStore,currentSlideIndexStore} from "./slidesStore";

    $:slides = $slidesStore;
    $:currentSlideIndex = $currentSlideIndexStore;
/////////////////////////////////////////

function moveUp() {
    // debugger;
    if ($currentSlideIndexStore > 0) {
      const newSlides = [...$slidesStore];
      const currentSlide = newSlides[$currentSlideIndexStore];
      newSlides.splice($currentSlideIndexStore, 1);
      newSlides.splice($currentSlideIndexStore - 1, 0, currentSlide);
      $slidesStore = newSlides;
      $currentSlideIndexStore -= 1;
    }
  }

  function moveDown() {
    if ($currentSlideIndexStore < $slidesStore.length - 1) {
      const newSlides = [...$slidesStore];
      const currentSlide = newSlides[$currentSlideIndexStore];
      newSlides.splice($currentSlideIndexStore, 1);
      newSlides.splice($currentSlideIndexStore + 1, 0, currentSlide);
      $slidesStore = newSlides;
      $currentSlideIndexStore += 1;
    }
  }

    </script>
    
    {#if slides && slides.length > 0}
    {#each slides as item, itemIndex (itemIndex)}
            <div 
                class="stack-panel-item"
                class:selected={itemIndex === currentSlideIndex}
            >
                <button 
                    class="stack-panel-selector" 
                    on:click={() => $currentSlideIndexStore = itemIndex }
                >
                    {String(item.type || '').toUpperCase().slice(0, 7)}
                </button>
                
                <div class="stack-panel-actions">
                    <div class="stack-panel-move-buttons">
                        <button 
                            class="stack-panel-move-button"
                            on:click={moveDown}
                        >
                            {Icons.DOWN}
                        </button>
    
                        <button 
                            class="stack-panel-move-button"
                            on:click={moveUp}
                        >
                            {Icons.UP}
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    {:else}
        <div class="stack-panel-empty">No items</div>
    {/if}
    
    <style>
    .stack-panel-item {
        text-align: center;
        border: 2px solid #737c89;
        border-radius: 10px;
        margin: 1px;
        transition: background-color 0.3s;
    }
    
    .stack-panel-item.selected {
        border-color: white;
        background-color: rgba(255, 0, 0, 0.1);
    }
    
    .stack-panel-item:hover {
        background-color: rgba(255, 0, 0, 0.2);
    }
    
    .stack-panel-selector {
        background-color: #4a5568;
        color: white;
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        margin: 0.25rem;
    }
    
    .stack-panel-actions {
        display: flex;
        justify-content: center;
        margin-top: 0.25rem;
    }
    
    .stack-panel-move-buttons {
        display: flex;
        justify-content: center;
        gap: 0.25rem;
    }
    
    .stack-panel-move-button {
        background-color: #4a5568;
        color: white;
        padding: 0.25rem;
        border-radius: 0.25rem;
    }
    
    .stack-panel-empty {
        text-align: center;
        color: #718096;
        padding: 1rem;
    }
    </style>