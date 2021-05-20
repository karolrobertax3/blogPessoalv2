const calculateBaseView = (value) => value * 30;

const calculateHowMuchClicks = (value) => Math.round((value/100) * 12);

const calculateShares = (value) => Math.round((value/100) * 0.3);

const newBaseView = (value) => value * 40;


const initialValue = 200;
console.log('initialValue: ', initialValue)

const baseView = calculateBaseView(initialValue);
console.log('baseView: ', baseView)

const howMuchClicks = calculateHowMuchClicks(baseView);
console.log('howMuchClicks: ', howMuchClicks)

const shares = calculateShares(howMuchClicks);
console.log('shares: ', shares)

const secondBaseView = newBaseView(shares);
console.log('secondBaseView: ', secondBaseView)

const totalView = baseView + secondBaseView;
console.log('totalView: ', totalView)