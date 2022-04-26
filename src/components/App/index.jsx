import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';

import { Button } from '../Button';
import { Modal } from '../Modal';

import GlobalStyles from '../../assets/styles/global';
import DefaultTheme from '../../assets/styles/themes/default';

import {
  Container, Header, WalletInfoContainer, AssetsList, Asset,
} from './styles';

import { getAssets } from '../../requests/assets';

function App() {
  const [assets, setAssets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAsset, setEditAsset] = useState(undefined);
  const equityValue = assets
   && assets.reduce((prev, asset) => prev + asset.amount_in_usd, 0);

  async function fetchAssets() {
    try {
      const fetchedAssets = await getAssets();
      setAssets(fetchedAssets);
    } catch {
      toast.error('Something went wrong :/');
    }
  }

  function handleModal() {
    if (isModalOpen) {
      setEditAsset(undefined);
    }
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    fetchAssets();
  }, []);

  useEffect(() => {
    console.log(assets);
  }, [assets]);

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        theme="dark"
        hideProgressBar
      />
      <Container>
        {isModalOpen
        && (
        <Modal
          editAsset={editAsset}
          setAssets={() => setAssets()}
          handleModal={() => handleModal()}
          fetchAssets={() => fetchAssets()}
        />
        )}
        <Header>
          <h1>
            crypto
            <strong>Folio</strong>
          </h1>
        </Header>
        <WalletInfoContainer>
          <div>
            <span>
              Equity value
            </span>
            <strong>
              $
              {' '}
              {equityValue.toLocaleString({ currency: 'USD' })}
            </strong>
          </div>
          <Button type="button" onClick={() => handleModal()}>New Asset</Button>
        </WalletInfoContainer>
        <AssetsList>
          <h2>My Portfolio</h2>
          {assets && assets.map((asset) => (
            <Asset key={asset.id} onClick={() => { setEditAsset(asset); handleModal(); }}>
              <div>
                <h3>{asset.token_id}</h3>
                <span>{asset.token_name}</span>
              </div>
              <div>
                <h3>
                  {asset.amount}
                  <small>{asset.token_id}</small>
                </h3>
                <span>
                  $
                  {' '}
                  {asset.amount_in_usd.toLocaleString({ currency: 'USD' })}
                </span>
              </div>
            </Asset>
          ))}
          {assets && assets.length > 0
            ? <span>Try clicking ↑</span>
            : <span>There is nothing here now, try to adding your first asset ↑</span>}
        </AssetsList>
      </Container>
    </ThemeProvider>
  );
}

export default App;
