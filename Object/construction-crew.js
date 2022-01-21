function func(worker = {}) {
  let workerOutput = worker;
  if (workerOutput.dizziness) {
    workerOutput.levelOfHydrated =
      0.1 * workerOutput.weight * workerOutput.experience;
    workerOutput.dizziness = false;
  }
  return workerOutput;
}
func({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });
