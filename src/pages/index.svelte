<script context="module">
  import RoutePath from '$utils/RoutePath';

  export async function load() {
    return {
      status: 301,
      redirect: `${RoutePath.LOGIN_SELECTION}`,
    };
  }
</script>
