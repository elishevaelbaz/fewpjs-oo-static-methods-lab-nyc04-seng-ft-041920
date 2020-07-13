class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arr = string.split(" ")
    for(const word of arr){
      if ((word === arr[0]) || !exceptions.includes(word)){
        result.push(Formatter.capitalize(word))
      }
      else{
        result.push(word)
      }
    }
    return result.join(" ")
  }
}