class storage{
    constructor(){
        var jaSalvos = JSON.parse(localStorage.getItem("filmes"))
        if(jaSalvos == null){
            jaSalvos = []
        }
        this.jaSalvos = jaSalvos
    }
    saveItems(item){
        if (!this.verificaRepeticao(item)){
            this.jaSalvos.push(item)
            localStorage.setItem("filmes", JSON.stringify(this.jaSalvos))
            
        }else{
            alert("ja está salvo")
        }
    }
    removeItems(item){
        if (this.verificaRepeticao(item) !== false){
            this.jaSalvos.splice(this.verificaRepeticao(item),1)
            localStorage.setItem("filmes", JSON.stringify(this.jaSalvos))
        }
    }
    
    verificaRepeticao(item){
        const verifica = this.jaSalvos.findIndex(elemento => elemento === item)
        if(verifica === -1){
            return(false)
        }else{
            return(verifica)
        }
    }


}

export default new storage()