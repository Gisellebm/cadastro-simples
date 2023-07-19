import Formulario from '@/components/Formulario';
import Botao from '../components/Botao';
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '@/hooks/useClientes';


export default function Home() {

  const { 
    cliente, 
    clientes, 
    tabelaVisivel, 
    exibirTabela,
    selecionarCliente, 
    excluirCliente, 
    novoCliente, 
    salvarCliente 
  } = useClientes()

  return (
    <main
      className={`
        flex h-screen flex-col items-center justify-center 
        bg-gradient-to-r from-indigo-500 to-purple-500 text-white
      `}
    >
      <Layout titulo='Cadastro Simples' >
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao 
                cor='green' className='mb-4'
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            /> 
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}

      </Layout>
    </main>
  )
}
