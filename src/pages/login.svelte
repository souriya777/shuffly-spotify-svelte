<script>
  import Button from '~/components/Button.svelte';
  import InputPassword from '~/components/InputPassword.svelte';
  import InputText from '~/components/InputText.svelte';
  import TopBar from '~/components/TopBar.svelte';
  import ButtonStyle from '~/utils/ButtonStyle';
  import RoutePath from '~/utils/RoutePath';

  const submitDeactivated = true;
</script>

<svelte:head>
  <title>Connexion</title>
</svelte:head>

<div class="login-view content">
  <TopBar>Log in</TopBar>
  <!-- TODO make form generic -->
  <form>
    <div class="form-field">
      <label for="login">Email or username</label>
      <InputText id="login" error={true} />
    </div>
    <div class="form-field">
      <label for="password">Password</label>
      <InputPassword id="password" />
      <div class="error-info">
        This email and password combination is incorect.
      </div>
    </div>
    <div class="submit">
      <Button
        variant={ButtonStyle.FILLED}
        to={RoutePath.SELECT}
        deactivated={submitDeactivated}>Log In</Button
      >
    </div>
  </form>
</div>

<style>
  form {
    margin-top: 1.8rem;
  }
  label {
    margin: 0.6rem 0;
    font-family: 'spotify-circular-bold';
    font-size: 2.4rem;
    letter-spacing: -0.1rem;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .error-info {
    margin-top: 0.6rem;
    font-size: 1.1rem;
  }
  .submit {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
</style>
