const formSubtmitFunction = function (e) {
  e.preventDefault()

  const toDoInput = document.getElementById("items")
  const aggiunta = toDoInput.value

  console.log(`Lista salvata: ${aggiunta}`)

  const section = document.getElementById("saved-task")
  section.innerHTML += `
    <article class="card-2">
        <div class="par-icon">
         <p>${aggiunta}</p>
         <button class="complete-button" onclick="completeTask(event)"><i class="fas fa-check"></i></button>
         <button class="delete-button" onclick="deleteCard(event)"><i class="fas fa-trash-alt"></i></button>
        </div>
    </article>
  `
  form.reset()
}

const deleteCard = function (e) {
  const button = e.currentTarget
  const card = button.closest("article")
  card.remove()
}

const completeTask = function (e) {
  const button = e.currentTarget
  const card = button.closest("article")
  const p = card.querySelector("p")
  p.classList.add("completed")
}

const form = document.querySelector("form")
form.addEventListener("submit", formSubtmitFunction)
