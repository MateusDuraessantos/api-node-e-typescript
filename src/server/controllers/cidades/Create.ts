import { Request, Response } from 'express'
import * as yup from 'yup'

interface ICidade {
    nome: string
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validadeData: ICidade | undefined = undefined
    try {
        validadeData = await bodyValidation.validate(req.body)
    } catch (e) {
        const yupError = e as yup.ValidationError
        console.log(e);

        return res.json({
            errors: {
                default: yupError.message,
            }
        })
    }
    
    console.log(validadeData)
    
    return res.send('Create!')
}