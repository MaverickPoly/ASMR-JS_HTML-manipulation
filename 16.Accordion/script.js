document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        const isActive = question.classList.contains("active");
        document.querySelectorAll(".faq-answer").forEach((answer) => {
            answer.style.display = "none";
        });
        document.querySelectorAll(".faq-question").forEach((q) => {
            q.classList.remove("active");
        });

        if (!isActive) {
            question.classList.add("active");
            answer.style.display = "block";
        }
    });
});