import React, { useState } from 'react';
import { clients } from '../../mockData/Client';
import { products } from '../../mockData/Product';
import { Session } from '../../models/Session';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';

interface AddSessionProps {
    addSession: (session: Session) => void;
}

const AddSession: React.FC<AddSessionProps> = ({ addSession }) => {

    const [clientId, setClientId] = useState('');
    const [productId, setProductId] = useState('');
    const [date, setDate] = useState('');

    const handleAddSession = () => {
        const selectedClient = clients.find(client => client.id === clientId);
        const selectedProduct = products.find(product => product.id === productId);

        if (selectedClient && selectedProduct) {
            const newSession: Session = {
                id: String(Date.now()), // Generate a unique ID for the session
                clientId,
                productId,
                name: `${selectedClient.name} - ${selectedProduct.name}`,
                date: new Date(date),

                durationMinutes: selectedProduct.durationMinutes,
                price: selectedProduct.price,
                paymentFinalization: selectedProduct.paymentFinalization,

                discount: selectedClient.discount,
                paymentMethod: selectedClient.paymentMethodPreference,
                location: selectedClient.locationPreference,
                generateInvoice: selectedClient.generateInvoices,
            };

            addSession(newSession);
        }
    };

    return (
        <>
            <Sheet>
                <div className='flex justify-end'>
                <SheetTrigger className='btn-main-h'>Add + </SheetTrigger>
                </div>
                <SheetContent side='left'>
                    <SheetHeader>
                        <h2>Add a session</h2>
                        <SheetDescription>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-2'>Client</label>
                                <select
                                    className='block form-main-select'
                                    value={clientId}
                                    onChange={e => setClientId(e.target.value)}
                                >
                                    <option value='' disabled>Select a client</option>
                                    {clients.map(client => (
                                        <option key={client.id} value={client.id}>{client.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-2'>Product</label>
                                <select
                                    className='block form-main-select'
                                    value={productId}
                                    onChange={e => setProductId(e.target.value)}
                                >
                                    <option value='' disabled>Select a product</option>
                                    {products.map(product => (
                                        <option key={product.id} value={product.id}>{product.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium mb-2'>Date</label>
                                <input
                                    type='date'
                                    className='block w-full'
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <Button
                                className='btn-main-f px-4 py-2'
                                onClick={handleAddSession}
                            >
                                Add Session
                            </Button>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
};
export default AddSession;