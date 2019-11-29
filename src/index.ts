import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('change', () => {
  console.log('1');
});
user.on('change', () => {
  console.log('2');
});
user.on('save', () => {
  console.log('save');
});

user.trigger('save');
