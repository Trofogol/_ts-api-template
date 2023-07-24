// Helper function to simulate asynchronous tasks with random delays
export const delay = (min: number, max: number) =>
  new Promise((resolve) => {
    const delay = Math.random() * (max - min) + min;
    setTimeout(resolve, delay * 1000);
  });

// returns plain string after random delay, prints its execution time
export async function thread1(): Promise<string> {
  const start1 = Date.now();
  await delay(1, 3);
  console.log(`Thread 1 took ${Date.now() - start1}ms`);
  return "Thread 1, Hello World, thread 2 should count a multiplication result \
of two random numbers in range between -50 to 50";
}

// returns 3 numbers: two random generated, and their multiplication,
// prints its execution time
export async function thread2(): Promise<any> {
  const start2 = Date.now();
  await delay(0.5, 1.5);
  const num1 = Math.floor(Math.random() * 101) - 50;
  // the second delay should help to get more randomness (RND is time based)
  await delay(0.5, 1.5);
  const num2 = Math.floor(Math.random() * 101) - 50;
  console.log(`Thread 2 took ${Date.now() - start2}ms`);
  return {
    num1,
    num2,
    "num-result": num1 * num2,
  };
}

// returns plain string after random delay, prints its execution time
export async function thread3(): Promise<string> {
  const start3 = Date.now();
  await delay(1, 3);
  console.log(`Thread 3 took ${Date.now() - start3}ms`);
  return "Thread 3 was there as well";
}

// runs two threads and waits for completion of both, prints its execution time
// returns their returns
export async function batch12(): Promise<any> {
  const batchStart = Date.now();
  const first = await thread1();
  const second = await thread2();
  console.log(`Threads 1 and 2 took ${Date.now() - batchStart}ms`);
  return { first, second };
}
