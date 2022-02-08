function deleteByEmail() {
  let inputMail = document.querySelector('input[name="email"]');
  let outputResult = document.getElementById('result');
  let Emails = Array.from(document.querySelectorAll('tr td:nth-of-type(2)'));
  let emailForDelete = Emails.find(x => x.textContent == inputMail.value);

  if (emailForDelete) {
    emailForDelete.parentElement.remove();
    outputResult.textContent = 'Deleted.';
  } else {
    outputResult.textContent = 'Not found.';
  }
}
