// es 6 needs work
// It's only looking at the first class not all of those with the class
// .input-field__input-container'

const $labelContainers = document.querySelectorAll('.dlc-input-field__input-container');

$labelContainers.forEach(($labelContainer) => {
  $labelContainer.addEventListener('click', (e) => {
    e.srcElement.parentNode.classList.add('active');
  });

  $labelContainer.addEventListener('focusin', (e) => {
    e.srcElement.parentNode.classList.add('active');
  });

  $labelContainer.addEventListener('focusout', (e) => {
    const
      $input = e.srcElement.parentNode.querySelector('.dlc-input-field__input'),
      $thisLabel = e.srcElement.parentNode.classList,
      input = $input.value;
    // const $spanLabel = this.querySelector('.dlc-input-field__label');
    console.log($thisLabel);
    if (input === '' && $thisLabel.contains('active')) {
      console.log(e.srcElement);
      e.srcElement.parentNode.classList.remove('active');
    }
  });
});
