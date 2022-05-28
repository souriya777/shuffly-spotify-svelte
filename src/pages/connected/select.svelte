<script>
  import InputText from '$lib/InputText.svelte';
</script>

<div class="select">
  <InputText id="testa" />
  <button>filters 🟨</button>
  <ul>
    <li>
      <input type="checkbox" name="all" id="all" />
      <img src="https://via.placeholder.com/150" alt="all" />
      <span class="title">ALL</span>
    </li>
    <li>
      <input type="checkbox" name="playlist1" id="playlist1" />
      <img src="https://via.placeholder.com/150" alt="playlist1" />
      <span class="title">playlist1</span>
    </li>
    <li>
      <input type="checkbox" name="playlist2" id="playlist2" />
      <img src="https://via.placeholder.com/150" alt="playlist2" />
      <span class="title">playlist2</span>
    </li>
    <li>
      <input type="checkbox" name="playlist3" id="playlist3" />
      <img src="https://via.placeholder.com/150" alt="playlist3" />
      <span class="title">playlist3</span>
    </li>
  </ul>
</div>
