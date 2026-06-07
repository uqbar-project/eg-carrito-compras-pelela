export class Contador {
  valor: number = 0
  desde?: number
  hasta?: number

  restar() {
    this.valor--
    if (this.desde && this.hasta && this.valor < this.desde) {
      this.valor = this.hasta
    }
  }

  sumar() {
    this.valor++
    if (this.desde && this.hasta && this.valor > this.hasta) {
      this.valor = this.desde
    }
  }
}
