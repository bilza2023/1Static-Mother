<script>
    import StaticPlayer from "../../lib/CanvasModule/staticPlayer/StaticPlayer.svelte";
    let items = [
      {
      uuid: "abc",
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      filled: true,
      lineWidth: 1,
      dash: 0,
      gap: 0,
      color: "red",
      globalAlpha: 1
    }
    ]; 
</script>

  <StaticPlayer {items} />