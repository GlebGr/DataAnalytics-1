import {useForm} from 'react-hook-form';
import "../style.css"
import Container from '@material-ui/core/Container';
import Button from '@mui/material/Button';


export default function ApplicForm () {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset()
    }   

    return (
        <Container>
        <Button href="/" color="inherit">Home</Button>

        <div className='ApplicForm'>
            <h1>Создать новую заявку на закуп</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Наименование продукции:
                    <input
                         {...register('firstName', {required: "Поле обязательно к заполнению"})} />
                </label>
                 <div style={{height: 40}}>
                    {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                 </div>

                 <label>
                    Количество:
                    <input 
                         {...register('amount', {required: "Поле обязательно к заполнению"})} />
                </label>
                 <div style={{height: 40}}>
                    {errors?.amount && <p>{errors?.amount?.message || "Error!"}</p>}
                 </div>

                 <label>
                    Срок поставки (Дней):
                    <input
                         {...register('deliveryTime', {required: "Поле обязательно к заполнению"})} />
                </label>
                 <div style={{height: 40}}>
                    {errors?.deliveryTime && <p>{errors?.deliveryTime?.message || "Error!"}</p>}
                 </div>

                 <label>
                    Срок сбора предложения (Дней):
                    <input
                         {...register('period', {required: "Поле обязательно к заполнению"})} />
                </label>
                 <div style={{height: 40}}>
                    {errors?.period && <p>{errors?.period?.message || "Error!"}</p>}
                 </div>
                <input type="submit" />
            </form>
        </div>
        </Container>
    );
}