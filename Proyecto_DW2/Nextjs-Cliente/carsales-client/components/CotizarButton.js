import styled from "styled-components";

const WhatsAppButton = styled.a`
  display: inline-block;
  padding: 20px 40px;
  background-color: #000000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top:10px;

  &:hover {
    background-color: #128c7e;
  }
`;

export default function CotizarButton() {
  const phoneNumber = "+50687193627";
  const message = `Hola, me gustaría cotizar un auto.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    const tempInput = document.createElement("textarea");
    tempInput.value = message;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <WhatsAppButton onClick={handleClick}>
      Cotizar
    </WhatsAppButton>
  );
}