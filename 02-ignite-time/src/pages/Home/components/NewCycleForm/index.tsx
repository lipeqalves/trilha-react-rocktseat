import { FormContainer, TasksInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number
// }

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task"> Vou trabalhar em</label>
      <TasksInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="Banan" />
      </datalist>
      <label htmlFor="minutesAmount">durrante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
