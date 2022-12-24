import { render, screen } from '@testing-library/react-native';
import { Home } from '~/infrastructure/ui/screens/home';

describe('Home', () => {
  it('should be able render home screen with current description', async () => {
    const { getByText } = render(<Home />);
    const isDefine = getByText(/Clean/i);
    expect(isDefine).toBeDefined();
  });
});
