import Notiflix from 'notiflix';

const myAdds = document.querySelector('.form');
console.log(myAdds);

myAdds.addEventListener('submit', myFunction);

function myFunction(e) {
  e.preventDefault();

  let delay = Number(myAdds.delay.value);
  let step = Number(myAdds.step.value);
  let amount = Number(myAdds.amount.value);

  console.log(delay, step, amount);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay = delay + step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve > 0.3) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}
