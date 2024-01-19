import React from "react";
import { Form, FormContent, InputField, ReturnButton } from "./style";

interface ModalProps {
  isOpen: boolean,
  onClose: ()=> void
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose})=> {
 return(<> 
        {isOpen && <Form>
          <FormContent>
            <ReturnButton onClick={onClose}>
              <img src={`svgs/chevron_left.svg`}/>
              Return
            </ReturnButton>

            <h5>Make a Request</h5>
            <h6>Fill out this form and our team will get in touch with you</h6>
            <InputField>
              <label>Name</label>
              <input placeholder="Digite"/>
            </InputField>
            <InputField>
              <label>E-mail</label>
              <input placeholder="Digite"/>
            </InputField>
            <InputField>
              <label>Cellphone</label>
              <input placeholder="Digite"/>
            </InputField>
            <InputField>
              <label>E-mail</label>
              <input placeholder="Digite"/>
            </InputField>

            <InputField>
              <label>Tax Identification</label>
              <input placeholder="Digite"/>
            </InputField>

            <label> Revenue</label>
            <select name="revenue-range" id="revenue">
              <option >Up to € 50.000 </option>
              <option>€50.000 to €500.000</option>
              <option>€500.000 to €1.000.000</option>
              <option>€1.000.000 to 10.000.000</option>
            </select>
          </FormContent>

  </Form>}
 </>)
}

export default Modal;