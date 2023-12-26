import { Toaster } from 'sonner'
import Table from "./components/Table"
import Modal from "./components/Modal"
import Form from "./components/Form"
import Spinner from "./components/Spinner"
import { useModal } from "./hooks/useModal"
import { usePokemons } from "./hooks/usePokemons"
import { useFormulario } from "./hooks/useForm"
import './App.css'

function App() {
  const { showModal, toggleModal } = useModal()
  const { pokemons, loading, fields, savePokemon, newPokemon, editPokemon, catchPokemon, removePokemon } = usePokemons(toggleModal)
  const { errors, register, handleSubmit, onSubmit } = useFormulario(savePokemon, fields)
  
  return (
    <>
      <Toaster richColors />
      <img src="src/assets/logo.png" className="logo" alt="Pokemons logo" />
      <div className="card">
        <Table pokemons={pokemons} newPokemon={newPokemon} catchPokemon={catchPokemon} editPokemon={editPokemon} removePokemon={removePokemon} />
      </div>
      <Modal showModal={showModal} toggleModal={toggleModal} onSubmit={handleSubmit(onSubmit)}>
        <Form register={register} errors={errors} />
      </Modal>
      {loading && <Spinner />}
    </>
  )
}

export default App
