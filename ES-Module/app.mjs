// import fn, { people, sayHello as hello} from './people.mjs';

// hello(people);

// fn();

async function main() {
  try {
    const { people, sayHello } = await import('./people.mjs');
    sayHello(people);
  } catch (e) {
    console.log('Error');
  }
}

main();
