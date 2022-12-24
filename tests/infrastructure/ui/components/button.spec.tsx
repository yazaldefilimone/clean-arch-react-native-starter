import { render, screen } from '@testing-library/react-native';
import { Button } from '~/infrastructure/ui/components/button';

describe('Button', () => {
  it('should be able render with current text', async () => {
    const { getByText } = render(<Button />);
    const isDefine = getByText('Get Start');
    expect(isDefine).toBeDefined();
  });
});
