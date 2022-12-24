import { TodoUseCase } from '~/application/use-cases/todo-usecase';

const makeSut = () => {
  const taskName = 'clean-arch-react-native-starter';
  const todoUseCase = new TodoUseCase(taskName);
  return {
    sut: todoUseCase,
    taskName,
  };
};

describe('TodoUseCase', () => {
  it('should be able return correct task', () => {
    const { sut, taskName } = makeSut();

    expect(sut.task).toBe(taskName);
  });
});
