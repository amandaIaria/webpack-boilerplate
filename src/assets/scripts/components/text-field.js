// es 6 needs work
// It's only looking at the first class not all of those with the class
// .input-field__input-container'

const
  $labelContainers = document.querySelectorAll('.dlc-input-field__input-container'),
  $txtContainers = document.querySelectorAll('.dlc-input-field__textarea-container');

$labelContainers.forEach(($labelContainer) => {
  $labelContainer.addEventListener('click', (e) => {
    e.srcElement.parentNode.classList.add('dlc-input-field--focused');
  });

  $labelContainer.addEventListener('focusin', (e) => {
    e.srcElement.parentNode.classList.add('dlc-input-field--focused');
  });

  $labelContainer.addEventListener('focusout', (e) => {
    const
      $input = e.srcElement.parentNode.querySelector('.dlc-input-field__input'),
      $date = e.srcElement.parentNode.querySelector('.dlc-input-field__date'),
      $thisLabel = e.srcElement.parentNode.classList,
      input = $input.value;
    // const $spanLabel = this.querySelector('.dlc-input-field__label');
    if (input === '' && $thisLabel.contains('dlc-input-field--focused') && !$date) {
      e.srcElement.parentNode.classList.remove('dlc-input-field--focused');
    }
  });
});

$txtContainers.forEach(($txtContainer) => {
  $txtContainer.addEventListener('click', (e) => {
    e.srcElement.parentNode.classList.add('dlc-input-field--focused');
  });

  $txtContainer.addEventListener('focusin', (e) => {
    e.srcElement.parentNode.classList.add('dlc-input-field--focused');
  });

  $txtContainer.addEventListener('focusout', (e) => {
    const
      $input = e.srcElement.parentNode.querySelector('.dlc-input-field__textarea'),
      $thisLabel = e.srcElement.parentNode.classList,
      input = $input.value;
    // const $spanLabel = this.querySelector('.dlc-input-field__label');
    if (input === '' && $thisLabel.contains('dlc-input-field--focused')) {
      e.srcElement.parentNode.classList.remove('dlc-input-field--focused');
    }
  });
});
