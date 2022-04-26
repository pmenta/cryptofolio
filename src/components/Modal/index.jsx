import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';

import { Overlay, Container, Footer } from './styles';

import { createAsset, updateAsset, deleteAsset } from '../../requests/assets';

export function Modal({
  editAsset, handleModal, fetchAssets,
}) {
  document.body.style.overflow = 'hidden';
  const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
  document.body.style.paddingRight = `${scrollBarCompensation}px`;

  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    try {
      if (editAsset) {
        await updateAsset({ id: editAsset.id, amount: formData.amount });
      } else {
        await createAsset(formData);
      }
      toast.success('Success!');

      await fetchAssets();
      handleModal();
    } catch (error) {
      toast.error('Something went wrong :/');
    }
  }

  async function removeAsset() {
    try {
      await deleteAsset(editAsset.id);
      toast.success('Success!');

      await fetchAssets();
      handleModal();
    } catch (error) {
      toast.error('Something went wrong :/');
    }
  }

  return createPortal(
    <Overlay>
      <Container>
        <header>
          <h1>{editAsset ? `Editing ${editAsset.token_id}` : 'Create a new asset'}</h1>
          <button type="button" onClick={handleModal}>X</button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormGroup label="Token:" error={errors.token_id ? 'Invalid token' : ''}>
            <Select
              {...register('token_id', { required: !editAsset })}
              error={errors.token_id}
              defaultValue={editAsset ? editAsset.token_id : ''}
              disabled={editAsset}
            >
              <option value="">Select a token</option>
              <option value="BTC">Bitcoin</option>
              <option value="BNB">BNB</option>
              <option value="START">bscstarter</option>
              <option value="DOGE">DogeCoin</option>
              <option value="ETH">Ethereum</option>
            </Select>
          </FormGroup>
          <FormGroup label="Amount:" error={errors.amount ? 'Invalid amount' : ''}>
            <Input
              {...register('amount', { required: true, min: 0 })}
              error={errors.amount}
              type="number"
              min="0"
              placeholder="Insert your token amount"
              defaultValue={editAsset ? editAsset.amount : ''}
            />
          </FormGroup>

          <Footer>
            { editAsset && (
            <button type="button" className="removeButton" onClick={removeAsset}>
              Remove
            </button>
            )}
            <Button type="submit">
              Accept
            </Button>
          </Footer>
        </form>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  editAsset: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    amount_in_usd: PropTypes.number.isRequired,
    token_id: PropTypes.string.isRequired,
    token_name: PropTypes.string.isRequired,
  }),
  setAssets: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  editAsset: null,
};
