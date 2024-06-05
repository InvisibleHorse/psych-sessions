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
    const [time, setTime] = useState('');
    const [durationMinutes, setDurationMinutes] = useState(60);
    const [price, setPrice] = useState('40');
    const [location, setLocation] = useState<'online' | 'in-person'>('online');
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'bank-transfer'>('card');
    const [paymentFinalization, setPaymentFinalization] = useState<'before' | 'after'>('before');
    const [generateInvoice, setGenerateInvoice] = useState(false);
    const [discount, setDiscount] = useState('0');

    const handleAddSession = () => {
        const selectedClient = clients.find(client => client.id === clientId);
        const selectedProduct = products.find(product => product.id === productId);

        if (selectedClient && selectedProduct) {
            const newSession: Session = {
                id: String(Date.now()),
                clientId,
                productId,
                name: `${selectedClient.name} - ${selectedProduct.name}`,
                date: new Date(date),
                time,
                durationMinutes,
                price,
                paymentFinalization,
                discount,
                paymentMethod,
                location,
                generateInvoice,
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
                            <hr className='pb-4'/>
                            <h3 className='pb-4'>Adjust details:</h3>
                            <div className='tableForForm'>
                                <div className='mb-4'>
                                    <label className='block text-sm font-medium mb-2'>Date</label>
                                    <input
                                        type='date'
                                        className='block w-full input'
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2">Time</label>
                                    <input
                                        type="time"
                                        className="block w-full input"
                                        value={time}
                                        onChange={e => setTime(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='sessionAdjustments'>
                                <div className='mb-4 smallerInput'>
                                    <label className='block text-sm font-medium mb-2'>Duration (Minutes)</label>
                                    <select
                                        className='block form-main-select'
                                        value={durationMinutes}
                                        onChange={e => setDurationMinutes(Number(e.target.value))}
                                    >
                                        <option value={30}>30</option>
                                        <option value={45}>45</option>
                                        <option value={60}>60</option>
                                        <option value={75}>75</option>
                                        <option value={90}>90</option>
                                    </select>
                                </div>
                                <div className='mb-4 smallerInput'>
                                    <label className='block text-sm font-medium mb-2'>Price</label>
                                    <input
                                        type='number'
                                        className='block w-20 input'
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        min="40"
                                        max="100"
                                    />
                                </div>
                                <div className='mb-4 smallerInput'>
                                    <label className='block text-sm font-medium mb-2'>Discount</label>
                                    <input
                                        type='number'
                                        className='block w-20 input'
                                        value={discount}
                                        onChange={e => setDiscount(e.target.value)}
                                        min="0"
                                        max="20"
                                    />
                                </div>
                                <div className='mb-4 smallerInput'>
                                    <label className='block text-sm font-medium mb-2'>Location</label>
                                    <select
                                        className='block form-main-select'
                                        value={location}
                                        onChange={e => setLocation(e.target.value as 'online' | 'in-person')}
                                    >
                                        <option value='online'>Online</option>
                                        <option value='in-person'>In Person</option>
                                    </select>
                                </div>
                                <div className='mb-4 smallerInput'>
                                    <label className='block text-sm font-medium mb-2'>Payment Method</label>
                                    <select
                                        className='block form-main-select'
                                        value={paymentMethod}
                                        onChange={e => setPaymentMethod(e.target.value as 'card' | 'paypal' | 'bank-transfer')}
                                    >
                                        <option value='card'>Card</option>
                                        <option value='paypal'>Paypal</option>
                                        <option value='bank-transfer'>Bank Transfer</option>
                                    </select>
                                </div>
                                <div className='mb-4 smallerInput'>
                                    <label className='block text-sm font-medium mb-2'>Payment Finalization</label>
                                    <select
                                        className='block form-main-select'
                                        value={paymentFinalization}
                                        onChange={e => setPaymentFinalization(e.target.value as 'before' | 'after')}
                                    >
                                        <option value='before'>Before</option>
                                        <option value='after'>After</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mb-4 smallerInput checkbox'>
                                <label className='text-sm font-medium mb-2'>
                                    <input
                                        type='checkbox'
                                        checked={generateInvoice}
                                        onChange={e => setGenerateInvoice(e.target.checked)}
                                    />
                                    <span>&nbsp;</span>
                                    Generate Invoice</label>
                            </div>
                            <div className="rightAlign">
                                <Button
                                    className='btn-main-f px-4 py-2'
                                    onClick={handleAddSession}
                                >
                                    Add Session
                                </Button>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    );
};
export default AddSession;
